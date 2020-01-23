import fetch from "isomorphic-fetch";
import Error from "next/error";

class Index extends React.Component{
    static async getInitialProps(){
        let stories;
        try{
            const response = await fetch("https://node-hnapi.herokuapp.com/n?page=1");
            stories = await response.json();
    
        }
        catch(err){
            console.log(err)
            stories=[];
        }

        return{stories};
    }
    render(){
        const {stories}= this.props;
        if(stories.length===0){
            return <Error statusCode={503}/>
        }
        return(
            <div>Hacker Next</div>
        )
    }
}

export default Index;