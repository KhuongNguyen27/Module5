import useClock from "./hooks/useClock";

function MyClock() {
  //Gọi custom hook để sử dụng
  const [time, ampm] = useClock();
  return (
    <div>
      {time}
      <span> {ampm}</span>
    </div>
  );
}
export default MyClock;