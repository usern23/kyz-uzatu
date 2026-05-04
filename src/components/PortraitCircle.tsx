// Круглый портрет — фото с саукеле
export default function PortraitCircle() {
  return (
    <section className="portrait section reveal">
      <div className="portrait-frame">
        <img src={`${import.meta.env.BASE_URL}img/tilda/orn-2.png`} alt="" />
      </div>
    </section>
  )
}
