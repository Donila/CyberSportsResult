import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import participantSchema from './ParticipantModel';

participantSchema.static('getAll', ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Participant
          .find(_query)
          .exec((err, participants) => {
              err ? reject(err)
                  : resolve(participants);
          });
    });
});

participantSchema.static('createParticipant', (participant:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(participant)) {
        return reject(new TypeError('participant is not a valid object.'));
      }

      var _participant = new Participant(participant);

      _participant.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

participantSchema.static('deleteParticipant', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Participant
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
});

let Participant = mongoose.model('Participant', participantSchema);

export default Participant;
