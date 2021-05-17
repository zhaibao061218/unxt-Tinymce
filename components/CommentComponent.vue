<template>
  <div class="commentDetails">
    <Comment ref="content" v-model="commentMsg"></Comment>
    <h2>Comment list (<span>19</span>)</h2>
    <div>

    </div>
    <div class="commentList" :class="{'slideHeight':showHeigeht == true && currentIndex == 1}">
      <!-- 一级平衡 -->
      <div>
        <div class="manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>

        <div class="commentRight">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured items
            and how one can qualify to purchase these items?
            Can you please add information on featured items
            and how one an qualify?</div>
          <ul>
            <li @click="deleteComment()">Delete</li>
            <li @click="replyConment()">
              <van-icon name="chat-o" />Reply
            </li>
            <li class="active">
              <van-icon name="good-job" /><span>522</span>
            </li>
          </ul>

        </div>
      </div>
      <!-- 二级评论 -->
      <div>
        <div class="lowerComment manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>
        <div class="commentRight lowerComment">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured
            items and how. // <span class="RespondPeople">@Marianne Garvey</span>：Can
            you please add information on featured items
            and how one can qualify to purchase these
            items?</div>
          <ul>
            <li></li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li>
              <van-icon name="good-job-o" /><span>Like</span>
            </li>
          </ul>

        </div>
      </div>
      <!-- 二级评论 -->
      <div>
        <div class="lowerComment manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>
        <div class="commentRight lowerComment">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured items
            and how one can qualify to purchase these items?
            Can you please add information on featured items
            and how one an qualify?</div>
          <ul>
            <li></li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li>
              <van-icon name="good-job-o" /><span>Like</span>
            </li>
          </ul>

        </div>

      </div>
      <!-- 二级评论 -->
      <div>
        <div class="lowerComment manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>
        <div class="commentRight lowerComment">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured items
            and how one can qualify to purchase these items?
            Can you please add information on featured items
            and how one an qualify?</div>
          <ul>
            <li></li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li>
              <van-icon name="good-job-o" /><span>Like</span>
            </li>
          </ul>

        </div>

      </div>
      <!-- 展开更多 -->
      <p class="slideDown" @click="changeHeigeht(1)">All 11 replies
        <van-icon name="arrow-down" />
      </p>
    </div>
    <div class="commentList" :class="{'slideHeight':showHeigeht == true && currentIndex == 2}">
      <!-- 一级评论 -->
      <div>
        <div class="manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>

        <div class="commentRight">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured items
            and how one can qualify to purchase these items?
            Can you please add information on featured items
            and how one an qualify?</div>
          <ul>
            <li>Delete</li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li class="active">
              <van-icon name="good-job" /><span>522</span>
            </li>
          </ul>

        </div>
      </div>
      <!-- 二级评论 -->
      <div>
        <div class="lowerComment manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>
        <div class="commentRight lowerComment">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured
            items and how. // <span class="RespondPeople">@Marianne Garvey</span>：Can
            you please add information on featured items
            and how one can qualify to purchase these
            items?</div>
          <ul>
            <li></li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li>
              <van-icon name="good-job-o" /><span>Like</span>
            </li>
          </ul>

        </div>
      </div>
      <div>
        <div class="lowerComment manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>
        <div class="commentRight lowerComment">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured
            items and how. // <span class="RespondPeople">@Marianne Garvey</span>：Can
            you please add information on featured items
            and how one can qualify to purchase these
            items?</div>
          <ul>
            <li></li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li>
              <van-icon name="good-job-o" /><span>Like</span>
            </li>
          </ul>

        </div>
      </div>
      <p class="slideDown" @click="changeHeigeht(2)">All 11 replies
        <van-icon name="arrow-down" />
      </p>
    </div>
    <div class="commentList" :class="{'slideHeight':showHeigeht == true}">
      <div>
        <div class="manIco">
          <img src="@/assets/img/blog/CommentMan.png" alt="" srcset="">
        </div>

        <div class="commentRight">
          <p class="name"><span>Daniel Lopez</span><span>March 8, 2021 at 01:54</span></p>
          <div>Can you please add information on featured items
            and how one can qualify to purchase these items?
            Can you please add information on featured items
            and how one an qualify?</div>
          <ul>
            <li>Delete</li>
            <li>
              <van-icon name="chat-o" />Reply
            </li>
            <li class="active">
              <van-icon name="good-job" /><span>522</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
// import Comment from '@/components/Comment'
export default {
  // components: { Comment },
  data() {
    return {
      showHeigeht: false,
      commentMsg: '',
    }
  },
  methods: {
    changeHeigeht(index) {
      this.showHeigeht = !this.showHeigeht
      this.currentIndex = index
      console.log(this.showHeigeht)
    },
    replyConment() {
      //回复评论
      console.log('回复评论')
    },
    deleteComment() {
      console.log('删除博客')
    },
  },
}
</script>
<style lang="scss" scoped>
.commentDetails {
	margin: 0 10px;

	.manIco {
		float: left;

		img {
			width: 40px;
			height: 40px;
			margin-right: 10px;
		}
	}

	.name {
		span {
			color: #333333;

			font-size: 13px;
			font-weight: bold;

			&:first-child {
				position: relative;

				display: inline-block;

				margin-right: 10px;

				color: #067ff7;

				&::before {
					position: absolute;
					top: 10%;
					right: -6px;

					width: 3px;
					height: 80%;

					content: "";
					transform: scaleX(0.5);

					background: #333333;
				}
			}
		}
	}

	.RespondPeople {
		color: #067ff7;
	}

	.slideDown {
		position: absolute;
		z-index: 10;
		bottom: 0;

		width: 100%;
		height: 30px;

		text-align: center;

		color: #ffb31a;
		background: #ffffff;

		font-size: 12px;
		line-height: 30px;

		.van-icon {
			position: relative;
			top: 3px;

			font-size: 16px;
		}
	}

	.commentList {
		position: relative;

		overflow: hidden;

		max-height: 490px;
		padding: 0 10px;

		transition: max-height 1s linear;

		background: #ffffff;

		&.slideHeight {
			max-height: 1000px;
		}

		& > div {
			padding-top: 10px;
		}

		.commentRight {
			margin-left: 50px;

			ul {
				display: flex;
				justify-content: flex-end;

				margin-top: 25px;

				li {
					display: flex;
					align-items: center;

					margin-left: 20px;

					font-size: 12px;

					.van-icon {
						margin-right: 4px;

						font-size: 20px;
					}

					&.active {
						color: #ffb31a;
					}
				}
			}
		}
	}

	.lowerComment {
		padding-left: 30px;
	}
}

</style>