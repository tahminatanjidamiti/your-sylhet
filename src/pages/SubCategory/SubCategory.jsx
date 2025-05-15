import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';



const subcategories = {
  Transport: {
    Bus: [
      { name: "Shohagh Paribahan (Facebook)", url: "https://www.facebook.com/shohaghparibahanbd/" },
      { name: "Green Line Paribahan", url: "https://www.greenlinebd.com/" },
      { name: "ENA Transport", url: "https://www.ena.com.bd/" },
      { name: "Hanif Enterprise", url: "https://hanifenterprise.com.bd/" },
      { name: "S Alam Paribahan", url: "https://www.salamparibahan.com/" },
      { name: "Ena Transport", url: "https://ena.com.bd/" },
    ],
    Train: [
      { name: "Bangladesh Railway eTicket", url: "https://eticket.railway.gov.bd/" },
      { name: "Sylhet Railway Station Info", url: "https://railway.portal.gov.bd/" },
    ],
    Airplane: [
      { name: "Biman Bangladesh Airlines", url: "https://www.biman-airlines.com/" },
      { name: "Novoair", url: "https://www.flynovoair.com/" },
      { name: "US-Bangla Airlines", url: "https://www.usbair.com/" },
    ],
    Ride: [
      { name: "Uber", url: "https://www.uber.com/bd/en/" },
      { name: "Pathao", url: "https://pathao.com/" },
      { name: "Shohoz", url: "https://www.shohoz.com/" },
    ],
  },
 Health: {
    Hospitals: [
      { name: "Sylhet MAG Osmani Medical", url: "http://www.somch.gov.bd/" },
      { name: "Mount Adora Hospital", url: "https://mountadora.com/" },
      { name: "Sylhet Women's Medical College Hospital", url: "http://swmch.edu.bd/" },
      { name: "Al Haramain Hospital", url: "http://alharamainhospitalbd.com/" },
      { name: "Lab Aid Specialized Hospital Sylhet", url: "https://labaidgroup.com/hospital/sylhet" },
    ],
    Doctors: [
      { name: "Doctorola", url: "https://doctorola.com/" },
      { name: "BDDoctors24", url: "https://bddoctors24.com/" },
      { name: "Practo Bangladesh", url: "https://www.practo.com/bangladesh" },
    ],
  },
  Education: {
    Universities: [
      { name: "Shahjalal University of Science and Technology", url: "https://www.sust.edu/" },
      { name: "Sylhet International University", url: "https://siu.edu.bd/" },
      { name: "Leading University", url: "https://leadinguniversity.edu.bd/" },
      { name: "North East University Bangladesh", url: "https://neub.edu.bd/" },
      { name: "Metropolitan University", url: "http://metrouni.edu.bd/" },
    ],
    Colleges: [
      { name: "Sylhet Government College", url: "http://sylhetgovcollege.edu.bd/" },
      { name: "MC College", url: "http://mccollege.edu.bd/" },
      { name: "Sylhet Cadet College", url: "https://sylhetcadetcollege.edu.bd/" },
      { name: "Moulvibazar Government College", url: "https://www.mbgc.gov.bd/" },
    ],
  },
  Government: {
    Services: [
      { name: "Sylhet DC Office", url: "http://www.sylhet.gov.bd/" },
      { name: "Bangladesh Police", url: "https://www.police.gov.bd/" },
      { name: "Sylhet City Corporation", url: "https://sylhetcitycorporationbd.com/" },
      { name: "Bangladesh Passport Office Sylhet", url: "https://www.passport.gov.bd/" },
    ],
  },
  OnlineServices: {
    Financial: [
      { name: "Bkash", url: "https://www.bkash.com/" },
      { name: "Nagad", url: "https://nagad.com.bd/" },
      { name: "Rocket (Dutch-Bangla Bank)", url: "https://rocket.com.bd/" },
      { name: "Upay", url: "https://upaybd.com/" },
      { name: "Tap (Modhumoti Bank)", url: "https://www.tap.com.bd/" },
    ],
  },
  Lifestyle: {
    "E-Commerce": [
      { name: "Daraz Bangladesh", url: "https://www.daraz.com.bd/" },
      { name: "Pickaboo", url: "https://www.pickaboo.com/" },
      { name: "Evaly", url: "https://evaly.com.bd/" },
      { name: "AjkerDeal", url: "https://ajkerdeal.com/" },
    ],
  },
  Tourism: {
    Destinations: [
      { name: "Jaflong", url: "https://en.wikipedia.org/wiki/Jaflong" },
      { name: "Ratargul Swamp Forest", url: "https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest" },
      { name: "Lawachara National Park", url: "https://en.wikipedia.org/wiki/Lawachara_National_Park" },
      { name: "Ham Ham Waterfall", url: "https://en.wikipedia.org/wiki/Ham_Ham_Waterfall" },
      { name: "Bisnakandi", url: "https://en.wikipedia.org/wiki/Bisnakandi" },
      { name: "Bholaganj", url: "https://en.wikipedia.org/wiki/Bholaganj" },
    ],
  },
  Finance: {
    Banks: [
      { name: "Islami Bank", url: "https://www.islamibankbd.com/" },
      { name: "Dutch-Bangla Bank", url: "https://www.dutchbanglabank.com/" },
      { name: "BRAC Bank", url: "https://www.bracbank.com/" },
      { name: "Prime Bank", url: "https://primebank.com.bd/" },
      { name: "City Bank", url: "https://www.thecitybank.com/" },
    ],
  },
  Accommodation: {
    Hotels: [
      { name: "Hotel Noorjahan Grand", url: "https://hotelnoorjahan.com/" },
      { name: "La Rose Hotel", url: "https://www.larosehotel.com/" },
      { name: "Rose View Hotel", url: "https://www.roseviewhotel.com.bd/" },
      { name: "Hotel Royal Crown Sylhet", url: "https://www.royalcrownsylhet.com/" },
      { name: "Meghaloy Hotel", url: "https://meghaloyhotel.com/" },
    ],
  },
  Utilities: {
    Electricity: [
      { name: "Palli Bidyut Sylhet", url: "https://pbsylhet.org.bd/" },
      { name: "DPDC", url: "http://www.dpdc.org.bd/" },
      { name: "Electricity Supply Authority Sylhet", url: "https://www.bpdb.gov.bd/" },
    ],
    Gas: [
      { name: "Jalalabad Gas", url: "http://www.jgtdsl.org.bd/" },
      { name: "Sylhet Gas Transmission & Distribution Co. Ltd.", url: "http://www.sylhetgas.org.bd/" },
    ],
  },
  Courier: {
    Services: [
      { name: "Sundarban Courier", url: "https://www.sundarbancourierltd.com/" },
      { name: "SA Paribahan", url: "http://sacourier.com.bd/" },
      { name: "FedEx Bangladesh", url: "https://www.fedex.com/en-bd/home.html" },
      { name: "Pathao Courier", url: "https://pathao.com/" },
    ],
  },
  Jobs: {
    Portals: [
      { name: "BDJobs", url: "https://www.bdjobs.com/" },
      { name: "JobStreet Bangladesh", url: "https://www.jobstreet.com.bd/" },
      { name: "Prothom Alo Jobs", url: "https://jobs.prothomalo.com/" },
      { name: "Chakri.com", url: "https://chakri.com/" },
    ],
  },
  Misc: {
    Services: [
      { name: "Mobile Repair – GPhone Sylhet", url: "https://www.facebook.com/gphonesylhet/" },
      { name: "Computer Troubleshooting – IT Home", url: "https://www.facebook.com/ithomebd/" },
      { name: "Home Appliance Repair – ElectroFix", url: "https://www.facebook.com/electrofixbd/" },
      { name: "Printing & Photocopy – Sylhet Print", url: "https://www.facebook.com/sylhetprint/" },
      { name: "Tailoring Service – Kushi Tailors Sylhet", url: "https://www.facebook.com/kushitailors/" },
      { name: "Plumbing Service – Sylhet Plumber", url: "https://www.facebook.com/sylhetplumber/" },
      { name: "Key Duplication – Key World Sylhet", url: "https://www.facebook.com/keyworldsylhet/" },
      { name: "Shoe Repair – FootCare Sylhet", url: "https://www.facebook.com/footcaresylhet/" },
      { name: "Cleaning Services – CleanMaster Sylhet", url: "https://www.facebook.com/cleanmastersylhet/" },
      { name: "AC Servicing – Sylhet AC Care", url: "https://www.facebook.com/sylhetaccare/" },
      { name: "Electrician Service – Sylhet Electric", url: "https://www.facebook.com/sylethelectric/" },
      { name: "Car Repair – Sylhet Auto Care", url: "https://www.facebook.com/sylhetautocare/" },
      { name: "Event Planning – Sylhet Events", url: "https://www.facebook.com/sylhetevetsbd/" },
      { name: "Photography – Sylhet Shutterbugs", url: "https://www.facebook.com/sylhetshutterbugs/" },
    ],
  },
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const getCategoryBySlug = (slug) =>
    Object.keys(subcategories).find(
        (key) => key.toLowerCase().replace(/ /g, '-') === slug
    );


const SubCategory = () => {
     const { url } = useParams();
    const matchedCategory = getCategoryBySlug(url);
    const sections = subcategories[matchedCategory] || {};

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-10 text-sky-950">
                YourSylhet – {matchedCategory || 'Subcategory'}
            </h1>
            {matchedCategory ? (
                Object.entries(sections).map(([sectionName, links]) => (
                    <motion.div
                        key={sectionName}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-8 rounded-lg p-4 shadow"
                    >
                        <h2 className="text-xl font-semibold text-sky-800 mb-3">{sectionName}</h2>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))
            ) : (
                <p className="text-red-500">Category not found.</p>
            )}
        </div>
    );
};

export default SubCategory;