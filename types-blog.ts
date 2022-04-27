export interface GetBlogsData {
    data: BlogsData[];
}

export interface BlogsData {
    id: string;
    img: string;
    title: string;
    subtitle: string;
    videoURL: string;
    publishDate: PublishDate;
    secondSection: SecondSection;
    startingSection: string;
}

export enum PublishDate {
    The18022021 = "18-02-2021",
}

export interface SecondSection {
    title: Title;
    point1: Point1;
    point2: Point2;
    point3: Point3;
    summary: string;
    point1Img1: string;
    point1Img2: string;
    point1Img3: string;
    point2Img1: string;
    point1Content: string;
    point2Content: string;
    point3Content: string;
}

export enum Point1 {
    The1DecideWhatTypeOfTeacherYouWantToBe = "1. Decide what type of teacher you want to be",
}

export enum Point2 {
    The2DecideYourPreferredSubject = "2. Decide your preferred subject",
}

export enum Point3 {
    The3EarnYourBachelorDegree = "3. Earn your bachelor degree",
}

export enum Title {
    The7StepsToBecomingATeacher = "7 Steps to becoming a teacher",
}
