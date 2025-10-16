import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.1153025811864!2d59.662501700000035!3d36.2958976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c9a0428938861%3A0x197d6f764a3c6bb2!2sMelal%20Commercial%20Complex!5e1!3m2!1sen!2s!4v1707662746351!5m2!1sen!2s"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="آدرس" value="مشهد، ایران" />
        <MyInfo field="ایمیل" value="mohammad.faazel.jafari@gmail.com" />
        <MyInfo field="تلفن" value="+98 939 808 3315" />
        <MyInfo field="فریلنسر" value="دسترس" />
      </ul>
    </div>
  );
}
