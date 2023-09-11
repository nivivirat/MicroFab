export default function Card({ content, img, isSelected, onClick }) {
    return (
        <div
            className={`flex flex-col lg:flex-col lg:items-center lg:h-[143px] lg:w-[183px] h-[110px] w-[140px] ${isSelected ? "bg-[#f4f3f8]" : "bg-white"} lg:rounded-lg`}
            onClick={onClick}
            style={{
                borderRadius: '12px',
                background: isSelected ? '#f4f3f8' : 'var(--white, #FFF)',
            }}
        >
            <div className="h-[55px] w-[55px] lg:w-[55px] lg:h-[55px] rounded-full bg-[#cdd7d8] flex items-center justify-center mb-2" style={{ margin: '20px auto 0' }}>
                <img src={img} alt="Card" className="w-[25px] h-[25px]" />
            </div>
            <div className="text-center lg:text-[16px] text-[10px] text-[#8AA6AA] mt-[15px]">{content}</div>
        </div>
    );
}
