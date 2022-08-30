import Loading from "../components/LoadingSymbol"

export default function SubmittingProposal(props) {

  let loading = props.loading;

    if (loading) {
      return (
        <div className="mb-5 mr-5 p-5 w-full h-full flex flex-col rounded-lg bg-black">
          <p className="text-3xl">Proposal is now submitting...</p>
          <Loading/>
        </div>
      )
    }
    else {
      return (
        <div className="mb-5 mr-5 p-5 w-full h-full flex flex-col rounded-lg bg-black">
          <p className="text-3xl">Testing</p>
              random text here
          <a href="#" className="mt-5 text-2xl hover:underline">Go back to proposals</a>
        </div>
        )
    }


}