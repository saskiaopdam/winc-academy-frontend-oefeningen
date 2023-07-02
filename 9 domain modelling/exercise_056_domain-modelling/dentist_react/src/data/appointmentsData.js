import dentists from "./dentistsData";
import assistants from "./assistantsData";
import patients from "./patientsData";

const getRandomDentist = () => {
  const dentist = dentists[Math.floor(Math.random() * 4)];
  return `${dentist.name} ${dentist.surname}`;
};

const getRandomAssistant = () => {
  const assistant = assistants[Math.floor(Math.random() * 2)];
  return `${assistant.name} ${assistant.surname}`;
};

const getRandomPatient = () => {
  const patient = patients[Math.floor(Math.random() * 50)];
  return `${patient.name} ${patient.surname}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomPatient(),
  dentist: getRandomDentist(),
  assistant: getRandomAssistant(),
});

const generateRandomAppointments = (num) =>
  Array(num)
    .fill(0)
    .map((_) => generateRandomAppointment());

const appointments = generateRandomAppointments(150);

export default appointments;
