import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"
const Shop = () => {
    //SHORTHAND FOR FRAGMENT <>
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop