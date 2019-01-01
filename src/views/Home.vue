<template>
    <v-app>
      <v-content>
        <v-container col>
          <v-layout>
            <v-flex xs12>
              <youtube :width="900" :height="500" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
              <v-flex xs12>
                  <v-slider v-model="slider" color="black" thumb-color="black">
                      <span
                      slot="prepend"
                      >
                        0
                      </span>
                    <span
                    slot="append"
                    >
                      {{slider}}
                    </span>
                  </v-slider>
                </v-flex>
          </v-layout>
          <v-layout row wrap justify-space-between row >
            <v-flex xs1>
              <v-btn fab dark small class="black">
                <v-icon >
                    volume_off
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs1>
              <v-btn fab dark small class="red">
                  <v-icon>
                      play_arrow
                  </v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs1>
                <v-slider thumb-label thumb-color="red">
                  <v-icon outline slot="prepend">
                    volume_up
                  </v-icon>
                </v-slider>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
                <v-text-field
                label="Youtube Video URL"
                placeholder="Example: https://www.youtube.com/watch?v=GX8Hg6kWQYI"
                v-model="videoURL"
                outline
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            slider: 0,
            show: true,
            videoURL: '',
            videoId: 'GX8Hg6kWQYI'
        }
    },
    methods: {
        playVideo() {
            this.player.playVideo()
        },
        playing() {
            console.log('\o/ we are watching!!!')
        }
    },
}
</script>

<style>

</style>
