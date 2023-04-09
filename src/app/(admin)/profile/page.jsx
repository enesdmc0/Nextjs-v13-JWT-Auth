import Image from 'next/image';

const Profile = () => {
    return (
        <div className="flex items-center justify-center h-full w-full flex-col  gap-3">
            <div className="relative w-48 h-48 rounded-full">
                <Image className="rounded-full" fill src="https://pbs.twimg.com/profile_images/1522265345779716096/x8ZnmfL-_400x400.jpg" alt="enes"/>
            </div>
            <h1 className="font-bold text-4xl">Enes Demirci</h1>
        </div>
    );
};

export default Profile;
