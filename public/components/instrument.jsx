var Instrument = ({instrument, handleClick}) => (
  <div className="" onClick={() => handleClick(instrument)}>
    <h2>{instrument}</h2>
  </div>
);

window.Instrument = Instrument;
