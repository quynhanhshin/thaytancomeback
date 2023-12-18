import Card from "./Card";

export default function Product() {
    let name = "Dầu gội";
    let number1 = 2;
    let number2 = 3;
    let number3 = 4;
    let list = ["Sữa chua", "Trứng gà", "Bánh tráng trộn", "Chân gà sả tắc"];
    return (
        <div className="list">
            {/* <div>Danh sách sản phẩm</div>
            <Card name={name} number={number1} />
            <Card name={"Lê Mèo"} number={number2} />
            <Card name={"Mì gói Thanh Long"} number={5} /> */}

            {/* {list.map((item, index) => {
                return <Card name={item} number={index} key={index} />; // sử dụng {} phải có return
            })} */}

            {list.map((item, index) => (
                <Card name={item} number={index + 1} key={index} /> //index là vị trí trong mảng, item là thứ tự phần tử
            ))}
        </div>
    );
}
