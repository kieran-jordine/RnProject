import React, {useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

import style from '../../utils/theme';

import {
  useGetPostQuery,
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from './api-service';

function RtkQuery({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): JSX.Element {
  const allPosts = useGetPostsQuery();

  const postId = useRef('');
  const [postID, setPostId] = useState<number>(route.params.postId);
  const {data, error, isLoading} = useGetPostQuery(postID);
  function onGetPost() {
    setPostId(Number(postId.current));
  }

  var postToAdd = {
    userId: 1,
    title: 'title content',
    body: 'body content',
  };
  const [addPost, addPostResult] = useAddPostMutation();
  function onAddPost() {
    addPost(postToAdd);
  }

  const updatePostId = useRef('');
  const [updatePost, updatePostResult] = useUpdatePostMutation();
  function onUpdatePost() {
    updatePost({id: Number(updatePostId.current), body: 'updated body'});
  }

  const deletePostId = useRef('');
  const [deletePost, deletePostResult] = useDeletePostMutation();
  function onDeletePost() {
    deletePost(Number(deletePostId.current))
      .unwrap()
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={style.container}>
        <Text style={style.headlineText}>RTK Query</Text>
        <TextInput
          placeholder="Post Id"
          onChangeText={text => (postId.current = text)}
          onSubmitEditing={onGetPost}
          inputMode="numeric"
          style={style.textInput}
        />
        <Button title="Get Post" onPress={onGetPost} />
        {isLoading && <Text>Loading ..</Text>}
        {error && <Text>{error.toString()}</Text>}
        {data && <Text>{`${data.id}, ${data.title}`}</Text>}
        <View style={style.divider} />
        {allPosts.data &&
          allPosts.data
            .filter(post => post.id <= 10)
            .map((post, index) => (
              <Text key={index}>{`${post.id}, ${post.title}`}</Text>
            ))}
        <View style={style.divider} />
        <Button title="Add Post" onPress={onAddPost} />
        {addPostResult.data && (
          <Text>{`${addPostResult.data.id}, ${addPostResult.data.title}`}</Text>
        )}
        <View style={style.divider} />
        <TextInput
          placeholder="Post Id"
          onChangeText={text => (updatePostId.current = text)}
          onSubmitEditing={onUpdatePost}
          inputMode="numeric"
          style={style.textInput}
        />
        <Button title="Update Post" onPress={onUpdatePost} />
        {updatePostResult.data && (
          <Text>{`${updatePostResult.data.id}, ${updatePostResult.data.title}, ${updatePostResult.data.body}`}</Text>
        )}
        <View style={style.divider} />
        <TextInput
          placeholder="Post Id"
          onChangeText={text => (updatePostId.current = text)}
          onSubmitEditing={onDeletePost}
          inputMode="numeric"
          style={style.textInput}
        />
        <Button title="Delete Post" onPress={onDeletePost} />
        {deletePostResult.data && (
          <Text>{`${deletePostResult.endpointName}, ${deletePostResult.requestId}, ${deletePostResult.isSuccess}`}</Text>
        )}
        <Button onPress={() => navigation.goBack()} title="Back" />
        <Button
          onPress={() => navigation.setParams({postId: 79})}
          title="Update Params"
        />
        <Button
          onPress={() =>
            navigation.navigate({
              name: 'ReduxStart',
              params: {postId: 79},
              merge: true,
            })
          }
          title="Send Back Info"
        />
        <Button
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'Account',
              params: {name: ''},
            })
          }
          title="Params to nested navigators"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RtkQuery;
