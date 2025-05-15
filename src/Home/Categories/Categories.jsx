import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";



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


const Categories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        const urlSlug = categoryName.toLowerCase().replace(/ /g, '-');
        navigate(`/category/${urlSlug}`);
    };

    return (
        <div className="px-4 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
                <motion.div
                    key={cat.name}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="cursor-pointer p-5 bg-white rounded-2xl shadow-md text-center hover:shadow-lg"
                    onClick={() => handleCategoryClick(cat.name)}
                >
                    <div className="text-4xl mb-2">{cat.icon}</div>
                    <h3 className="text-md font-semibold text-gray-700">{cat.name}</h3>
                </motion.div>
            ))}
            <button className="btn mt-10 btn-success bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent"><Link to="https://www.sylhet.gov.bd/">Learn More About Sylhet</Link></button>
        </div>
    );
};
export default Categories;