import style from "./style.module.scss";
import { Dispatch, useState } from "react";
import { Plus } from "react-feather";

export default function ItemBox(props: { onChange: Function, items: string[] }) {
  const [items, setItems] = useState(props.items);
  
  async function removeItem(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    props.onChange(newItems);
  }
  
  async function newItem() {
    const newItem = prompt("New item");
    if (newItem) {
        setItems([...items, newItem]);
        props.onChange([...items, newItem]);
    }
  }

  return (
    <div className={style.container}>
      {items.map((item, index) => (
        <div key={index} className={style.item} onClick={() => removeItem(index)}>
          {item}
        </div>
      ))}
      <Plus className={style.new} onClick={newItem}/>
    </div>
  );
}
