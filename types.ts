export interface GetCoursesData {
 data: CourseData[];
}

export interface CourseData {
 mainCourses: CoursesOnDeal[];
 coursesOnDeals: CoursesOnDeal[];
 featuredInstructor: FeaturedInstructor[];
 studentReview: StudentReview[];
}

export interface CoursesOnDeal {
 id: string;
 title: string;
 courseType: string;
 courseDetails: string;
 courseCover: string;
 videoURL: string;
 mainPrice: number;
 discountPercent: number;
 instructorDetails?: InstructorDetailsDetails;
 instructorDetailsDetails?: InstructorDetailsDetails;
 quantity?: number;
 level?: string;
}

export interface InstructorDetailsDetails {
 name: string;
 avatar: string;
}

export interface FeaturedInstructor {
 id: string;
 name: string;
 department: string;
 avatar: string;
 numberOfClasses: string;
 numberOfLessons: string;
}

export interface StudentReview {
 id: string;
 name: string;
 avatar: string;
 review: string;
}
