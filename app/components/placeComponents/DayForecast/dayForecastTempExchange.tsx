const TempExchange = ({
  temp_c,
  temp_f,
  isCelsius,
}: {
  temp_c: number;
  temp_f: number;
  isCelsius: boolean;
}) => {
  return (
    <div>
      {isCelsius && (
        <h1>
          {temp_c}
          <sup>o</sup>C
        </h1>
      )}
      {!isCelsius && (
        <h1>
          {temp_f}
          <sup>o</sup>F
        </h1>
      )}
    </div>
  );
};

export default TempExchange;
