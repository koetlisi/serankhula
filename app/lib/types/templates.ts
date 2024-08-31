
type Qualification = "Undergraduate" | "Postgraduate" | "Professional" | "High School" | "Others";
interface Template {
    id: string;
    name: string;
    qualification: Qualification;
    requiredData: string[];  
}
