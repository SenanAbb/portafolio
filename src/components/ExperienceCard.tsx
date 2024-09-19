function ExperienceCard({ children }:any) {
  return (
    <div className="bg-gradient-to-tr from-blue-950/50 to-blue-950/20 px-20 py-10 rounded-lg drop-shadow-sm shadow-inner-custom">
      {children}
    </div>
  );
}

export default ExperienceCard;
