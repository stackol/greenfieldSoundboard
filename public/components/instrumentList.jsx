var InstrumentList = ({handleClick}) => (
  <div className="">
    {instruments.map((instrument, index) =>
      <Instrument instrument={ instrument } key={ index } handleClick={handleClick} />
    )}
  </div>
);


window.InstrumentList = InstrumentList;
