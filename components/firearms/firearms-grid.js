import Product from '../catalogue/Product';
import FirearmItem from './firearm-item';
import css from './firearms-grid.module.css'

export default function FirearmsGrid({firearms}) {  
  return (
    <ul className={css.gallery}>
      {Object.keys(firearms).map((firearmId) => (
        <li key={firearmId}>
          <Product {...firearms[firearmId]} />
        </li>
      ))}
    </ul>
  );
}
