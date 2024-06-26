/*
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import actionTypes from "../constants/actionTypes";

const initialData = {
  posts: [],
  prevOffset: null,
  nextOffset: null,
};

const communityReducer = (state = initialData, action) => {
  switch (action.type) {
    case actionTypes.FETCHED_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        prevOffset: action.payload.previous_offset,
        nextOffset: action.payload.next_offset,
      };
    case actionTypes.FETCHED_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId ? action.payload.post : post,
        ),
        post: action.payload.post,
      };
    default:
      return state;
  }
};
export default communityReducer;
