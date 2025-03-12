using System.Collections;
using DG.Tweening;
using UnityEngine;

public class Сonveyor : MonoBehaviour
{
   [SerializeField] private float stepDistance = 5f;
   [SerializeField] private float moveInterval = 7f;
   [SerializeField] private float moveDuration = 1.5f;
   [SerializeField] private GameObject tree;
   
   private int countMove;

    private void Start()
    {
        InvokeRepeating(nameof(MoveSmooth), moveInterval, moveInterval);
    }

    private void MoveSmooth()
    {
        Vector3 targetPos = transform.position + new Vector3(stepDistance, 0f, 0f);
        transform.DOMoveX(targetPos.x, moveDuration).SetEase(Ease.InOutSine);
        countMove++;
        
        if (countMove >= 2)
        {
            SpawnTree();
        }
    }

    private void SpawnTree()
    {
        tree.gameObject.SetActive(true);
        countMove = 0;
    }
}
