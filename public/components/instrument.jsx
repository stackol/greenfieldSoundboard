var Instrument = ({instrument, handleClick}) => (
  <div className="instrumentNav" onClick={() => handleClick(instrument)}>
    <button className="button">{instrument}</button>
  </div>
);

window.Instrument = Instrument;
