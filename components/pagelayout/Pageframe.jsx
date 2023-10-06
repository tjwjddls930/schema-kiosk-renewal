import Navbar from "../navbar/Navbar";

export default function Pageframe({children}) {
    // const [volume, setVolume] = useState(Number(0.5));
    // const [soundguide, setSoundguide] = useState(false);
    // const [con, setCon] = useState(true);
    // const {t, i18n} = useTranslation('navbar');

    return(
        <div className="h-screen w-screen">
            {children}
            {/* navbar */}
            {/* <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"exhibit"}
            /> */}
        </div>
    )
};