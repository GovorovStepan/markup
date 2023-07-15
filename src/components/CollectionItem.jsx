import './CollectionItem.css';
export default function CollectionItem({ img, size, category }) {

  let h = 0;
  let w = 0;

  switch (size) {
    case 'big':
      h = 958;
      w = 730;

      break;
    case 'wide':
      h = 444;
      w = 730;

      break;

    default:
      h = 444;
      w = 330;
      break;
  }

  return (
    <div id="collection_item">
      <img src={img} className={category} style={{
        width : w,
        height: h
      }}></img>
    </div>
  );
}
