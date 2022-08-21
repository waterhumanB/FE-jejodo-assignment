import { Ai, Chacha, Cowlose, GongIn, Mockha, Name, SungHee } from '../assets'

interface Iprops {
  datakey: string
}

const Profile = ({ datakey }: Iprops) => {
  const targetProfile = {
    차차: <Chacha />,
    공인즙개사: <GongIn />,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AI: <Ai />,
    소잃고뇌약간고침: <Cowlose />,
    성희: <SungHee />,
    목하: <Mockha />,
  }[datakey] ?? <Name />
  return targetProfile
}

export default Profile
