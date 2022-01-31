import { Bar } from '../components/Bar';
import PropTypes from 'prop-types';

export function FirstGraphic({ response }) {
  const data = [
    {
      "response": "1 até 3",
      "employees": response.filter(response => response.question1 === '1to3').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "4 até 6",
      "employees": response.filter(response => response.question1 === '4to6').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "7 até 9",
      "employees": response.filter(response => response.question1 === '7to9').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "10 até 14",
      "employees": response.filter(response => response.question1 === '10to14').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    },
    {
      "response": "15 ou mais",
      "employees": response.filter(response => response.question1 === '15more').length,
      "employeesColor": "hsl(168, 70%, 50%)",
    }
  ];
  return (
    <Bar data={ data } axisBottom="respostas" axisLeft="Numero de respostas" />
  )
}

FirstGraphic.propTypes = {
  data: PropTypes.array,
  axisBottom: PropTypes.string,
  axisLeft: PropTypes.string,
}
