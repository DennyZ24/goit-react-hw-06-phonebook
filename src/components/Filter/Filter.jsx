import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/action";
import { getFilter } from "redux/selectors";
import s from "components/Filter/Filter.module.css";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Search contact

      <input className={s.input} type='text' name='filer' value={filter} onChange={(e)=>dispatch(changeFilter(e.currentTarget.value))}/>
    </label>
  )
}