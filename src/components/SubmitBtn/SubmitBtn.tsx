export const SubmitBtn = ({
   titleBtn,
   disabled,
}: {
   titleBtn: string,
   disabled: boolean,
}) => {
   return (
      <div className="w-full">
         <button
            type="submit"
            className="w-full py-3 rounded-xl cursor-pointer bg-[#f1f1f1] disabled:text-[#7D7D7D] disabled:bg-[#D9D9D9]"
            disabled={disabled}
         >
            {titleBtn}
         </button>
      </div>
   );
};
