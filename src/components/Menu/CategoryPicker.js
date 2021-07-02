import {
    Box,
    Tab,
    Tabs,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {

    getCategories,
    getCategoryIndex,
    getCategoryNames
} from "store/FoodMenu/selector";

import React from "react";
import { setCategoryIndex, clearCategoryIndex } from "store/FoodMenu/reducer";



function CategoryPicker() {
    const categories = useSelector(getCategoryNames);
    const categoryIndex = useSelector(getCategoryIndex);
    const dispatch = useDispatch();

    const handleCategoryChange = (e, newIndex) => {
        if (newIndex === 0) {
            dispatch(clearCategoryIndex())
        }
        else {
            dispatch(setCategoryIndex(newIndex - 1))
        }
    }

    return (
        <Box flexBasis="200px">
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={(categoryIndex === null ? 0 : categoryIndex + 1)}
                onChange={handleCategoryChange}
                aria-label="Vertical tabs example"
            >
                <Tab label="Full menu" />
                {categories.map((category) => <Tab label={category} />)}
            </Tabs>
        </Box>
    );
}

export default CategoryPicker;
