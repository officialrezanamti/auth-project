interface Iprop{
    type:string,
    placeHolder:string,
    name:string
}
export default function Input({type , placeHolder , name} : Iprop) {
  return (
    <input
      type={type}
      className="md:w-[40%] px-3  py-2 outline-none placeholder-slate-400 rounded-md"
      name={name}
      id=""
      placeholder={placeHolder}
    />
  );
}
