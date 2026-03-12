import "./Body.css";
import { Word } from "../dummy";
import { check } from "../dummy";
import Image from "../image";
const Body = () => {
  return (
    <>
      <div className="Body">
        <div className="Body-side">
          <div className="Body-left">
            <ul className="Body-sides">
              {Word.map((Data) => (
                <li className="texts" key={Data.id}>
                  {Data.texts}
                </li>
              ))}
            </ul>
          </div>
          <div className="Body-middle">
            <Image />
          </div>
          <div className="Body-right">
            <div className="a">
              {check.map((Datas) => (
                <li className="check" key={Datas.id}>
                  {Datas.texts}
                </li>
              ))}
            </div>
            <div className="b">
              <img className="b-image" src="image3.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
