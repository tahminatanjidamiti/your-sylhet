import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
    { name: "Transport", icon: "🛣️" },
    { name: "Health Services", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Government", icon: "🛂" },
    { name: "Online Services", icon: "🌐" },
    { name: "Lifestyle", icon: "🛒" },
    { name: "Tourism", icon: "🏞️" },
    { name: "Finance", icon: "🏦" },
    { name: "Accommodation", icon: "🏨" },
    { name: "Utilities", icon: "⚡" },
    { name: "Courier", icon: "📦" },
    { name: "Jobs", icon: "💼" },
    { name: "Misc Services", icon: "🛠️" },
];

const MainSubCategory = () => {

const navigate = useNavigate();

    const handleCategoryClick = (name) => {
        const slug = name.toLowerCase().replace(/ /g, '-');
        navigate(`/category/${slug}`);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Main Categories</h1>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.map((cat) => (
                    <li key={cat.name}>
                        <button
                            className="w-full bg-white hover:bg-gray-100 p-4 rounded-lg shadow text-center"
                            onClick={() => handleCategoryClick(cat.name)}
                        >
                            <div className="text-3xl mb-1">{cat.icon}</div>
                            <div className="font-semibold">{cat.name}</div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default MainSubCategory;