export class mentorinfo {
    public name:String;
    public email: String;
    public password: string;
    public Technolgies: string;
    public yearsofExperience:  String;
    public Facilities: String;
    public role:  String;
    public Timestart: String;
    public linkedinUrl: String;
    public contactno:  string;


    
   

    constructor(name,email,mpassword,technology,experience,facility,timestart,linkurl,contactno) { 
        this.name=name;
        this.email=email;
        this.password=mpassword;
        this.Technolgies=technology;
        this.yearsofExperience=experience;
        this.Facilities=facility;
        this.role='Mentor';
        this.Timestart=timestart;
        this.linkedinUrl=linkurl;
        this.contactno=contactno;
        
    }   
    
}