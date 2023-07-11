import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Terms() {
  return (
    <main
      className={`min-h-screen text-neutral-900 px-6 xl:px-0 justify-between ${inter.className} bg-neutral-50`}
    >
      <div className="w-full max-w-screen-xl mx-auto pt-12 flex items-center justify-between">
        <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-extrabold">athlete.is</h1>
        <Link href="/" className="text-sm xl:text-lg">Aftur heim</Link>
      </div>

      <div className="relative max-w-screen-xl mx-auto text-left space-y-6 py-24 xl:my-0">
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>1. Almennt</h2>
            <p className='text-lg font-light'>Athlete.is veitir þjónustu á sviði styrktarþjálfunar í formi fjarþjálfunar. Almennir skilmálar þessir gilda um alla þjónustu sem athlete.is veitir viðskiptamönnum sínum, nema um annað sé sérstaklega samið. Við lítum á athugasemdalausa viðtöku viðskiptavina okkar á þjónustu sem samþykki þeirra á skilmálunum.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>2. Reikningar og innheimta</h2>
            <p className='text-lg font-light'>Greiðslur fyrir þjónustu athlete.is fara eftir gildandi gjaldskrá á hverjum tíma sem birt er á heimasíðu athlete.is (www.athlete.is). Athlete.is endurskoðar gjaldskrána reglulega og áskilur sér rétt til að breyta henni án sérstakrar tilkynningar og fellur þá eldri gjaldskrá úr gildi. Hafi viðskiptavinur ekki greitt reikning fær hann áminningu um ógreiddan reikning. Ef reikningur er ekki greiddur eða brugðist við áminningu má viðskiptamaður búast við tafarlausri uppsögn, sbr. 4. gr. Útgefnir reikningar athlete.is eru án virðisaukaskatts þar sem veitt þjónusta er undanþegin virðisaukaskatti, sbr. 5. tölul. 3. mgr. 2. gr. laga nr. 50/1988, um virðisaukaskatt.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>3. Fjarvistir viðskiptavina o.fl.</h2>
            <p className='text-lg font-light'>Greiðslur fyrir þjónustu athlete.is fást ekki endurgreiddar, óháð mætingu viðskiptavinar. Ef viðskiptavinur er fjarverandi á tímabilinu, svo sem vegna veikinda, frítöku eða af öðrum ástæðum er hvorki unnt að frysta yfirstandandi tímabil, flytja tíma á milli tímabila né veita afslátt eða endurgreiðslu í heild eða að hluta. Í slíkum tilvikum getur athlete.is, en er ekki skylt, að koma til móts við viðskiptavini sína með samkomulagi.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>4. Vanefndir, vanefndarúrræði og uppsögn</h2>
            <p className='text-lg font-light'>Komi til vanefnda af hálfu viðskiptavinar áskilur athlete.is sér rétt til að segja sig frá þjálfun. Athlete.is skal almennt gerð með skriflegri tilkynningu til viðskiptamanns þar sem greint er frá ástæðum uppsagnar. Til vanefnda af hálfu viðskiptamanns teljast m.a. brot á skilmálum þessum og hvers kyns vanefnd á greiðslu reikninga. Óski viðskiptavinur ekki lengur eftir þjónustu athlete.is skal hann senda skriflega tilkynningu þess efnis með tölvupósti á netfangið adameidur@gmail.com eða í gegnum samskiptaforrit. Unnt er að segja upp þjónustunni hvenær sem er á tímabilinu og tekur uppsögnin gildi við lok yfirstandandi tímabils.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>5. Ábyrgð</h2>
            <p className='text-lg font-light'>Með kaupum á þjónustu athlete.is staðfestir viðskiptavinur að honum sé óhætt að stunda líkamsrækt og honum sé engin sérstök hætta búin af því heilsufarslega. Viðskiptavinir athlete.is stunda æfingar á eigin ábyrgð og firrir athlete.is allri ábyrgð á hugsanlegum meiðslum eða slysum sem kunna að koma fyrir nema það verði sannanlega rakið til stórfellds gáleysis starfsmanna athlete.is.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>6. Kvartanir</h2>
            <p className='text-lg font-light'>Hafi viðskiptamenn okkar einhverjar athugasemdir eða kvartanir varðandi þjónustuna geta þeir beint erindi til þess starfsmanns sem veitir þjónustuna eða skriflega á netfangið adameidur@gmail.com. Við tökum allar ábendingar og kvartanir alvarlega og reynum að tryggja að slík erindi fái skjóta, skilvirka og sanngjarna afgreiðslu.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>7. Lögsaga Og Varnarþing</h2>
            <p className='text-lg font-light'>Um skilmálana og annað það sem heyrir undir þjónustu okkar gilda íslensk lög. Ágreining sem kann að rísa milli athlete.is og viðskiptamanna þess skulu aðilar leitast við að leysa með samkomulagi. Ef ekki næst samkomulag skulu ágreiningsmál rekin fyrir héraðsdómi Reykjaness.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>8. Trúnaður</h2>
            <p className='text-lg font-light'>Allar persónulegar upplýsingar viðskiptavina athlete.is eru varðveittar og ber athlete.is að halda algjörum trúnaði með allar persónulegar upplýsingar viðskiptavina.</p>
        </div>
        <div>
            <h2 className='text-xl xl:text-2xl 2xl:text-3xl font-black'>athlete.is</h2>
            <p className='text-lg font-light'>Adam Eiður Ásgeirsson</p>
            <p className='text-lg font-light'>Kt: 2707982419</p>
            <p className='text-lg font-light'>Bergás 3, 260 Reykjanesbær</p>
            <p className='text-lg font-light'>S: 6966090</p>
            <p className='text-lg font-light'>adameidur@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
