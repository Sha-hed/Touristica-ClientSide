

const PayNowForm = () => {
    const handleSubmit =  e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const currency = e.target.currency.value;
        const price = e.target.price.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const data = { name, currency, price, address, phone}
        data.productId=12345
        console.log(data);
        fetch('http://localhost:5000/order-payment',{
            method: "POST",
            headers:{
                'content-type' : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.replace(data.url)
            console.log(data)});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="block p-3 border-2 border-red-600 outline-none" defaultValue={'Kazi Mohammad Shahedd'} type="text" name="name" id="" />
                <select defaultValue={"bdt"} name="currency">
                    <option value="bdt">BDT</option>
                    <option value="usd">USD</option>
                    <option value="pound">pound</option>
                </select>
                <input className="block p-3 border-2 border-red-600 outline-none" defaultValue={6600} type="number" name="price" id="" />
                <input className="block p-3 border-2 border-red-600 outline-none" defaultValue={'MohamamdPur Dhaka'} type="text" name="address" id="" />
                <input className="block p-3 border-2 border-red-600 outline-none" defaultValue={"01780306163"} type="number" name="phone" id="" />
                <input className="btn btn-primary p-3" type="submit" value="Pay" />
            </form>
            
        </div>
    );
};

export default PayNowForm;