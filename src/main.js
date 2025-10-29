import { Factor , UpdateCartToal } from './components/factor/factor'
import { RenderItems } from './components/menu/menu'
import './style.css'

let app = document.getElementById("app")
app.classList.add(
  "p-4",
  "flex",
  "flex-col",
  "gap-5",
  "lg:flex-row",
  "lg:gap-10"
);
app.append(RenderItems() , Factor())
UpdateCartToal()