import ClassRoom from './0-classroom';

const classroomOne = new ClassRoom(19);
const classroomTwo = new ClassRoom(20);
const classroomThree = new ClassRoom(34);

export default function initializeRooms() {
  return [
    classroomOne,
    classroomTwo,
    classroomThree,
  ];
}
