import { Filter, Search } from './assets'
import Profile from './components/Profile'
import mock from './data/mockdata.json'

function App() {
  return (
    <main style={{ width: '320px', margin: 'auto', fontWeight: '700' }}>
      <section style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
        <div
          style={{
            fontSize: '28px',
            letterSpacing: '-0.15em',
            marginTop: '40px',
          }}
        >
          화섬 아파트 지구家 입주민들
        </div>
        <br />
        <div
          style={{
            fontSize: '16px',
            letterSpacing: '-0.15em',
            marginBottom: '40px',
            marginTop: '10px',
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
            marginBottom: '50px',
          }}
        >
          <input
            style={{ width: '100%', fontSize: '14px', marginLeft: '25px' }}
            placeholder="검색"
          />
          <button
            style={{
              margin: 'auto 20px auto 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Search />
          </button>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            marginBottom: '20px',
            borderBottom: '1px solid #000',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '110px',
              height: '32px',
              display: 'flex',
              border: '1px solid black',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              color: '#fff',
              background: '#000',
              fontWeight: '700',
            }}
          >
            <div>입주민들</div>
            <div
              style={{ fontWeight: '700', color: '#4498F2', marginLeft: '5px' }}
            >
              {mock.length}
            </div>
          </div>
          <button>
            <Filter />
          </button>
        </div>
        {mock.map((data, index) => (
          <div
            key={index + data.nickname}
            style={{
              width: '100%',
              height: '105px',
              border: '1px solid #000',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              padding: '15px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Profile datakey={data.nickname} />
            </div>
            <div style={{ width: '100%', paddingLeft: '20px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div
                  style={{
                    paddingRight: '15px',
                    fontSize: '18px',
                    marginTop: '6px',
                  }}
                >
                  {data.nickname}
                </div>
                <div
                  style={{
                    color: '#4498F2',
                    fontSize: '14px',
                    marginTop: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  지구家 아파트{data.building_count}개
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '17px',
                    height: '17px',
                    background: '#FFDC3C',
                    border: '1px solid #000',
                    fontSize: '8px',
                    borderRadius: '10px',
                    marginRight: '4px',
                  }}
                >
                  제
                </div>
                <div
                  style={{
                    color: '#999999',
                    fontWeight: '400',
                    marginRight: '10px',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {data.nickname}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '17px',
                    height: '17px',
                    background: '#4498F2',
                    border: '1px solid #000',
                    fontSize: '8px',
                    borderRadius: '10px',
                    marginRight: '4px',
                  }}
                >
                  오
                </div>
                <div
                  style={{
                    color: '#999999',
                    fontWeight: '400',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {data.oname}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
export default App
