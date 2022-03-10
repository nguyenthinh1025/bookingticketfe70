



const stateDefault = {
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./img/glassesImage/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
}

export const BaiTapChonGlassesReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'XEM_CHI_TIET_SP': {
            state = action.sanPhamClick;
            return { ...state };
        }
        default: return state;
    }
}


