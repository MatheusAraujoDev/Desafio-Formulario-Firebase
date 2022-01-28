import { Bar } from '../components/Bar';

export function SecondGraphic({response}) {
  const data = [
    {
      "response": "1",
      "employees": response.filter(response => response.question2 === '1').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "2",
      "employees": response.filter(response => response.question2 === '2').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "3",
      "employees": response.filter(response => response.question2 === '3').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "4",
      "employees": response.filter(response => response.question2 === '4').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "5",
      "employees": response.filter(response => response.question2 === '5').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "6",
      "employees": response.filter(response => response.question2 === '6').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "7",
      "employees": response.filter(response => response.question2 === '7').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "8",
      "employees": response.filter(response => response.question2 === '8').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "9",
      "employees": response.filter(response => response.question2 === '9').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "10",
      "employees": response.filter(response => response.question2 === '10').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
  ];
  return (
    <Bar data={data} axisBottom="respostas" axisLeft="Numero de respostas" />
  )
};
