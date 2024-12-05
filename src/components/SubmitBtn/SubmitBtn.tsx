export const SubmitBtn = ({ titleBtn }: { titleBtn: string }) => {
   return (
      <div className="w-full">
         <button
            type="submit"
            className="w-full py-3 rounded-xl cursor-pointer disabled:text-[#7D7D7D] disabled:bg-[#D9D9D9]"
            disabled
         >
            {titleBtn}
         </button>
      </div>
   );
};
