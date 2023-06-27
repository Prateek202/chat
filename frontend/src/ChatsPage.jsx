import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = ( props) =>
{
    const ChatsProps = useMultiChatLogic('20d43d46-fe28-4aa8-83a1-803aec315c35',
    props.user.username,
    props.user.secret)
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...ChatsProps}/>

            <MultiChatWindow {...ChatsProps}  style={{height: '100%'}}/>
        </div>
    )
}
export default ChatsPage