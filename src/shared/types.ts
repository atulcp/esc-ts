export enum SelectedPage {

    Home = "home",
    Benefits = "benefits",
    OurPrograms = "ourprograms",
    ContactUs = "contactus"
    
    }

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ProgramType {
    name: string;
    description?: string;
    image: string;
}