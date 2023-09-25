var listDisGGmap = [
    {
        id: 0,
        tench: "MD Coffee", ten: "Số 2 B11 đường Hàm Nghi, Phường Cầu Diễn, Quận Nam Từ Liêm, Hà Nội",
        diachi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.956702173258!2d105.76559867504878!3d21.034418387584587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b9bca289c3%3A0x66d7b5fec5199ca4!2zMiBQLiBIw6BtIE5naGksIE3hu7kgxJDDrG5oLCBOYW0gVOG7qyBMacOqbSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695179001609!5m2!1svi!2s",
        khuvuc: "hanoi",
        zip: "100000",
        sdt: "0981 881 369"
    },
    {
        id: 1,
        tench: "Đi cafe",
        ten: "33 Xuân Tảo, Xuân La, Tây Hồ, Hà Nội",
        diachi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.535542016421!2d105.79478557504912!3d21.05126228700573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc5acdd15ad%3A0x8e2f0ee8080b7fd7!2zxJBpIENhZmXigKY!5e0!3m2!1svi!2s!4v1695179088153!5m2!1svi!2s",
        khuvuc: "hanoi",
        zip: "100000",
        sdt: "0388 001 369"
    },
    {
        id: 2,
        tench: "NHƯ Ý coffee",
        ten: "Như Ý coffee, 102A Chung cư 7 tầng lô C3 Xuân Lộc 4 Xuân Đỉnh, Bắc Từ Liêm, Hà Nội",
        diachi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.391165164476!2d105.77693914846938!3d21.06875608561003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0935cea279%3A0x38cc8d398cbf7986!2zTmjGsCDDnSBDb2ZmZWU!5e0!3m2!1svi!2s!4v1695179152882!5m2!1svi!2s",
        khuvuc: "hanoi",
        zip: "100000",
        sdt: "0979 390 174"
    }
];

var tacccElements = document.querySelectorAll(".taccc");
var listMap = document.querySelector(".no-bullets");
var mapElement = document.getElementById("map");
var divElement = document.querySelector(".drop_list-item");
const toggleButton = document.getElementById("toggleButton");
let ulElement;
let ulVisible = false;
var selectedIndex = -1;
var searchResults = [];


function render(listDisGGmap) {
    const htmls = listDisGGmap.map((dt, index) => {
        const isSelected = selectedIndex === index || index === 0 ? "selected" : "";
        return `
            <li onclick="showInfo(${index})" data-index="${index}" data-value="${dt.khuvuc}" class="taccc ${isSelected}">
            <p class="shop" style="margin: 0 0 -2px 0; font-size:1.2rem;color:black;font-weight:500;">${dt.tench}</p>
            <p class="datafilterdistrict" data-filter="${dt.ten}" style="margin-bottom: 0px; color:black">
            <i class="twi-location-arrow1" aria-hidden="true" style="margin-right: 5px;display: unset;font-weight: bold;"></i>${dt.ten}
            </p>
            <a href="tel:${dt.sdt}"><i class="twi-phone" aria-hidden="true" style="margin-right: 4px;display: unset;font-weight: bold;color:black;"></i>${dt.sdt}</a>
            </li>
        `;
    });
    listMap.innerHTML = htmls.join('');
}

const showInfo = (index) => {
    selectedIndex = index;

    removeSelected();
    const selectedLi = document.querySelector(`[data-index="${selectedIndex}"]`);
    selectedLi.classList.add("selected");
    const mapSource = searchResults.length > 0 ? searchResults[index].diachi : listDisGGmap[index].diachi;
    mapElement.src = mapSource;
    const nameShop = document.querySelectorAll('.shop');
    const n = document.querySelector('.name-shop');
    console.log(nameShop[index].innerHTML);
    n.innerHTML = nameShop[index].innerHTML;
}

function removeSelected() {
    const allLiElements = document.querySelectorAll(".taccc");
    allLiElements.forEach((li) => {
        li.classList.remove("selected");
        divElement.style.display = "none";
        ulVisible = false;
    });
}


document.addEventListener("DOMContentLoaded", function () {
    render(listDisGGmap);
    mapElement.src = listDisGGmap[0].diachi;
});


function searchShops(keyword, province) {
    var newSearchResults = [];

    for (var shop of listDisGGmap) {
        var shopName = shop.tench.toLowerCase();
        var shopDc = shop.ten.toLowerCase();
        var shopProvince = shop.zip;
        var keywordMatch = shopName.includes(keyword.toLowerCase()) || shopDc.includes(keyword.toLowerCase());
        var provinceMatch = province === '0' || shopProvince === province;
        if ((keywordMatch && provinceMatch) || (keyword === '' && provinceMatch)) {
            newSearchResults.push(shop);
        }
    }

    if (newSearchResults.length > 0) {
        searchResults = newSearchResults;
        mapElement.src = searchResults[0].diachi;
    } else {
        searchResults = [];
        mapElement.src = '';
    }

    render(searchResults);
}

loadShops = () => {
    const keyword = document.getElementById('shops-name').value;
    const province = document.getElementById('shops-province').value;
    const allLiElements = document.querySelectorAll(".taccc");

    allLiElements.forEach((li) => {
        if (li.classList.contains("selected") && li.dataset.index !== selectedIndex.toString()) {
            li.classList.remove("selected");
        }
    });
    searchShops(keyword, province)
}

toggleButton.addEventListener("click", function () {
    if (!ulElement) {
        ulElement = listMap;
        divElement.appendChild(ulElement);
    }
    if (ulVisible) {
        divElement.style.display = "none";
        ulVisible = false;
    } else {
        divElement.style.display = "block";
        ulVisible = true;
    }
});

// function toggleDropList() {
//     const liElements = divElement.querySelectorAll(".taccc");
//     // liElements.forEach((li) => {
//     //     ulElement.style.display = "none";
//     //     ulVisible = false;
//     // });
//     return liElements;
// }

// console.log(toggleDropList());

// divElement.querySelectorAll(".taccc").forEach((li) => {
//     li.addEventListener("click", function () {
//         ulElement.style.display = "none";
//         ulVisible = false;
//     });
// });