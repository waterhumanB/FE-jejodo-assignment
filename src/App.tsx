import { Search } from './assets'
import Profile from './components/Profile'
import mock from './data/mockdata.json'

function App() {
  return (
    <main style={{ width: '320px', margin: 'auto' }}>
      <section style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
        <div
          style={{
            fontWeight: '700',
            fontSize: '28px',
            letterSpacing: '-0.15em',
            marginTop: '25px',
          }}
        >
          화섬 아파트 지구家 입주민들
        </div>
        <br />
        <div
          style={{
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '-0.15em',
            marginBottom: '15px',
          }}
        >
          화섬 아파트에 입주한 입주민들입니다.
          <br /> 같이 화성에 가는날을 기다리며 화목하게 지내봐요!
        </div>
        <div
          style={{
            width: '100%',
            height: '32px',
            border: '1px solid black',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <input
            style={{ width: '100%', fontSize: '14px', marginLeft: '25px' }}
            placeholder="검색"
          />
          <button style={{ margin: 'auto 20px auto 0' }}>
            <Search />
          </button>
        </div>

        <div>입주민들</div>
        {mock.map((data, index) => (
          <div
            key={index + data.nickname}
            style={{
              width: '100%',
              height: '94px',
              border: '1px solid #000',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              padding: '15px',
              marginBottom: '10px',
            }}
          >
            <Profile datakey={data.nickname} />
            <div>
              <div>{data.nickname}</div>
              <div style={{ color: 'blue' }}>
                지구家 아파트{data.building_count}개
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>제{data.oname}</div>
                <div>오{data.nickname}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
export default App
