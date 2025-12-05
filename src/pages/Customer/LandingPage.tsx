import Header from '../../components/Header';
import CategoryMenu from '../../components/CategoryMenu';
import RecentItems from '../../components/RecentItems';

function LandingPage() {
  return (
    <div>
      <Header />
      {/* Container for CategoryMenu and RecentItems */}
      <div className="container mx-auto px-4">
        {/* CategoryMenu positioned to the left, above RecentItems */}
        <div className="py-4 border-b border-brown-100">
          <div className="flex justify-start">
            <CategoryMenu />
          </div>
        </div>
        {/* RecentItems section */}
        <RecentItems />
      </div>
    </div>
  )
}

export default LandingPage;