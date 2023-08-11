using UnityEngine;
using UnityEditor;

/// <summary>
/// Creates a prefab from Nouns base models. Created as a fix for improperly rigged https://3dnouns.com/ characters.
/// 
/// This tool takes a "MAIN" prefab with the base body and head set up, creates a new prefab based on the "MAIN" one, and swaps out the textures for the imported .gltf gameobject.
/// 
/// Set Up:
/// -Download the base body.glb and head.glb from https://github.com/0xFloyd/3DNouns/tree/main/public/baseModels.
/// -Import them into Unity.
/// -Create a main Nouns gameobject prefab that is structured as so:
///    - Parent: Empty Placeholder (Make the name be "MAIN")
///         -Children:
///             - gameobject of the body.glb
///            - gameobject of the head.glb
/// -Go to https://3dnouns.com/ and download as many created characters as you want.
/// -Import the downloaded Nouns character .gltf files into Unity.
/// -Place the created "MAIN" prefab in the same location as the imported .gltf models
/// -Select all of the .gltf models you want to convert and the "MAIN" noun model. If they are in a lone folder you can do Ctrl+A.
/// -At the top bar in Unity go to Custom Tools>MakeNounPrefabs and click it.
/// -Wait a bit while the prefabs are created :)
/// 
/// Aside: ~This is my first tool in Unity so the performance might not be great (having to do a for loop just to find out the "MAIN" prefab gameobject), however since this only runs once to create the Nouns prefab and in the editor this is negligeable in gameplay.
/// 
/// Created by @samangarc22. I am a gamedev YouTuber at @samyam_youtube.
/// </summary>
namespace Infrastructure.Editor
{
    public class NounCharacterAssigner
    {
        [MenuItem("CustomTools/MakeNounPrefabs")]
        private static void CreateNounsFromBase() {
            GameObject prefab = null;
            // Find out which gameobject is the base model.
            foreach (GameObject activeGameObject in Selection.gameObjects) {
                 if (activeGameObject.name.Equals("MAIN")) {
                    prefab = activeGameObject;
                    break;
                }
            }
            // If none is found do not keep running the function.
            if (prefab == null) return;
            // Loop through all of the selected gameobjects in the editor, swap out their textures, and create a new prefab from them.
            foreach (GameObject activeGameObject in Selection.gameObjects) {
                if (activeGameObject.name.Equals("MAIN")) {
                    continue;
                }

                // Extract individual items from nouns model.
                Transform head = activeGameObject.transform.FindDeepChild("12");
                Transform glasses = activeGameObject.transform.FindDeepChild("13");
                Transform body = activeGameObject.transform.FindDeepChild("46");
                Transform hands = activeGameObject.transform.FindDeepChild("45");
                Transform legs = activeGameObject.transform.FindDeepChild("47");
                Transform shoes = activeGameObject.transform.FindDeepChild("48");

                SkinnedMeshRenderer headSMR = head.gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer glassesSMR = glasses.gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer bodySMR = body.gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer handsSMR = hands.gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer legsSMR = legs.gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer shoesSMR = shoes.gameObject.GetComponent<SkinnedMeshRenderer>();

                // Create a new Nouns from the main prefab.
                GameObject newNouns = GameObject.Instantiate(prefab);
                SkinnedMeshRenderer glassesMain = newNouns.transform.FindDeepChild("glasses").gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer headMain = newNouns.transform.FindDeepChild("head").gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer bodyMain = newNouns.transform.FindDeepChild("body").gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer handsMain = newNouns.transform.FindDeepChild("hands").gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer legsMain = newNouns.transform.FindDeepChild("legs").gameObject.GetComponent<SkinnedMeshRenderer>();
                SkinnedMeshRenderer shoesMain = newNouns.transform.FindDeepChild("shoes").gameObject.GetComponent<SkinnedMeshRenderer>();

                // Replace the textures and mesh in the Nouns base model with the newly selected Noun.
                glassesMain.sharedMesh = glassesSMR.sharedMesh;
                glassesMain.sharedMaterial = glassesSMR.sharedMaterial;

                headMain.sharedMesh = headSMR.sharedMesh;
                headMain.sharedMaterial = headSMR.sharedMaterial;
                
                bodyMain.sharedMesh = bodySMR.sharedMesh;
                bodyMain.sharedMaterial = bodySMR.sharedMaterial;
                
                handsMain.sharedMesh = handsSMR.sharedMesh;
                handsMain.sharedMaterial = handsSMR.sharedMaterial;
                
                shoesMain.sharedMesh = shoesSMR.sharedMesh;
                shoesMain.sharedMaterial = shoesSMR.sharedMaterial;

                string localPath = "Assets/Prefabs/Nouns" + activeGameObject.name + ".prefab";

                // Make sure the file name is unique, in case an existing Prefab has the same name.
                localPath = AssetDatabase.GenerateUniqueAssetPath(localPath);

                // Create the new Prefab and log whether Prefab was saved successfully.
                bool prefabSuccess;
                PrefabUtility.SaveAsPrefabAssetAndConnect(newNouns, localPath, InteractionMode.UserAction, out prefabSuccess);
                if (prefabSuccess == true)
                    Debug.Log("Prefab was saved successfully");
                else
                    Debug.Log("Prefab failed to save" + prefabSuccess);
            } 
        }
    }
}
